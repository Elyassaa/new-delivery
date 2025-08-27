export default function App() {
  return (
    <div>
      <h2 className="bg-green-600 text-white">
        Hello world
      </h2>
      <h1 className="text-yellow-600">
        Hello there
      </h1>

      <div className="pt-5 pb-4 h-auto text-white Parent bg-slate-900" >
        <div className="container mx-auto">
          <div className="grid grid-cols-7 gap-4 auto-cols-max ">
            <div className="p-6 col-span-5 col-start-2 co rounded-lg bg-sky-500 ">1</div>
            <div className="p-6 col-start-3 col-end-5 rounded-lg bg-sky-500 ">2</div>
            <div className="p-6 rounded-lg bg-sky-500 ">3</div>
            <div className="p-6 rounded-lg bg-sky-500 ">4</div>
            <div className="p-6 rounded-lg bg-sky-500 ">5</div>
            <div className="p-6 rounded-lg bg-sky-500 ">6</div>
            <div className="p-6 rounded-lg bg-sky-500  ">6</div>
            <div className="p-6 rounded-lg bg-sky-500 col-span-2 ">6</div>
            <div className="p-6 rounded-lg bg-sky-500 col-span-3 ">6</div>
          </div>
        </div>
      </div>
      <hr className="mt-2" />
      <div className="container mx-auto">
        <div className=" m-3 grid grid-flow-col-dense grid-rows-3 gap-4">
          <div className="p-6 rounded-lg  bg-sky-500 ">1</div>
          <div className="p-6 row-span-3 rounded-lg bg-sky-500 ">2</div>
          <div className="p-6 rounded-lg bg-sky-500 ">3</div>
          <div className="p-6 rounded-lg bg-sky-500 ">4</div>
          <div className="p-6 rounded-lg bg-sky-500 ">5</div>
          <div className="p-6 rounded-lg bg-sky-500 ">6</div>
          <div className="p-6 rounded-lg bg-sky-500 ">7</div>
        </div>
      </div> 
    
    <div className="container px-2 columns-lg ">
      <p>
        Your text here...
      </p>
      <img className="w-100 border-1" src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630">
      </img>
      <img className=" w-40 border-1" src="https://i.pinimg.com/736x/2d/95/e5/2d95e5886fc4c65a6778b5fee94a7d59.jpg">
      </img>
       <p class="bg-red-100 p-4 rounded-lg">
        Tailwind CSS is a utility-first CSS framework that allows you to design directly in your markup.
        Instead of writing custom CSS, you compose classes to style elements quickly and consistently.
      </p>

      <p class="bg-green-100 p-4 rounded-lg">
        It comes with a default set of design tokens for spacing, colors, typography, and more, which you can customize
        to match your brand’s design system.
      </p>

      <p class="bg-blue-100 p-4 rounded-lg">
        The framework supports responsive design, hover states, dark mode, and many other modern web features out of the box,
        enabling faster and more consistent UI development.
      </p>
    </div>

  </div>
  )
}
