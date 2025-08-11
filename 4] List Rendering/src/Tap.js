export default function Tap() {
  return (
    <div id={'containerTap'}>
      <h2 className='title'>Posts</h2>

      <button id={'morePost'} type="button" title="view More Posts">
        <svg viewBox="0 0 14 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2L12 10L2 18" />
        </svg>
      </button>
    </div>
  )
}
