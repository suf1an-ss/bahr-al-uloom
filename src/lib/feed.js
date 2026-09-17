const DRIVE_ID = /\/d\/([A-Za-z0-9_-]{10,})|[?&]id=([A-Za-z0-9_-]{10,})/

export function driveFileId(raw) {
  if (!raw) return ''
  // A Forms upload field holds one link per file, comma-separated; the first is the post image.
  const first = String(raw).split(',')[0].trim()
  const match = first.match(DRIVE_ID)
  if (match) return match[1] || match[2]
  return /^[A-Za-z0-9_-]{10,}$/.test(first) ? first : ''
}

// Drive rejects plenty of hotlinked requests, so each source is tried before the card gives up.
export function imageSources(id) {
  if (!id) return []
  return [
    `https://drive.google.com/uc?export=view&id=${id}`,
    `https://drive.google.com/thumbnail?id=${id}&sz=w1200`,
    `https://lh3.googleusercontent.com/d/${id}=w1200`,
  ]
}

export function formatDate(time) {
  if (Number.isNaN(time)) return ''
  return new Date(time).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}

export function toEntries(rows) {
  return rows
    .map((row, index) => {
      const timestamp = String(row.Timestamp ?? '').trim()
      return {
        index,
        caption: String(row.Caption ?? '').trim(),
        sources: imageSources(driveFileId(row.Photos)),
        time: timestamp ? Date.parse(timestamp) : NaN,
      }
    })
    .filter((entry) => entry.caption || entry.sources.length)
    .sort((a, b) => {
      if (Number.isNaN(a.time) && Number.isNaN(b.time)) return a.index - b.index
      if (Number.isNaN(a.time)) return 1
      if (Number.isNaN(b.time)) return -1
      return b.time - a.time
    })
}
