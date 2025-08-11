export default function ImageSlider() {

  const atteributeImg = [
    {
      id:1, 
      src: "https://picsum.photos/1920/1080?tech",
      alt: "تكنولوجيا",
      loading: "lazy"
    },
    {
      id:2,
      src: "https://picsum.photos/1920/1080?design",
      alt: "تصميم",
      loading: "lazy"
    },
    {
      id:3,
      src: "https://picsum.photos/1920/1080?innovation",
      alt: "ابتكار",
      loading: "lazy"
    }
  ]

  const images = atteributeImg.map((img) => 
    img.src == null || img.src === "" ? 
      <></> 
    : 
      <img key={img.id} src={img.src} alt={img.alt} loading={img.loading} />
  )

  return (
    <section id={'containerSlider'}>
      <div id={'Slider'}>
        {images}
      </div>
    </section>
  )
}