export interface IImage {
  fields: {
    title: string,
    file: {
      fileName: string,
      contentType: string,
      details: {
        image: {
          width: number,
          height: number
        },
        size: number
      },
      url: string
    },
    description: string
  }
}