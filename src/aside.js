export default function InsertAside() {
    return (
        <>
        <p>Price</p>
        <input type="range" min="1" max="10" className="slider"></input>
        <br />
        <div>
          <p>Disc Type </p>
        </div>
      </>
    )
}



const aside = <>
  <p>Price</p>
  <input type="range" min="1" max="10" className="slider"></input>
  <br />
  <div>
    <p>Disc Type xxxxxxxxx 12312312312312</p>
  </div>
</>;

export {aside}