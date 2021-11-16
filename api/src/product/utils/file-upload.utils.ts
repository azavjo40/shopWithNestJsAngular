export const imageFileFilter = (req: any, file: any, cb: any) => {
  if (file.mimetype === "image/png" || file.mimetype === "image/jpeg") {
    cb(null, true)
  } else {
    cb(null, false)
  }
}

export const editFileName = (req: any, file: any, cb: any) => {
  const date = Date.now()
  cb(null, `${date}-${file.originalname}`)
}
