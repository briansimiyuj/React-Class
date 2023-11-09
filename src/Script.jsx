function Script() {

  const name = 'Brian',

         x = true

  return (

    <div className="script">

      <h1>Hello world</h1>

      <h2>Hello {name}</h2>

      <h2>{2 + 2}</h2>

      <h2>{x ? 'Yes' : 'No'}</h2>

    </div>
   
  )
}

export default Script