import { getImage } from "~/server/queries";

export default async function FullImagePage(props: { id: number }) {
  const image = await getImage(props.id)

  return (
    <img src={image.url} alt="image" className="w-96" />
  )
}
