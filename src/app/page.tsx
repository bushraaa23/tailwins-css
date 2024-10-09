import Image from "next/image";
import Link from "next/link"

export default function Home(){
  return( 
   <div>

{/* 3 div center p and h1 name */}
    <div className="bg-slate-300 max-w-7xl justify-center mx-auto m-6  rounded-xl flex p-4 ">

       <div className="p-2  max-w-xs m-3 bg-gradient-to-t from-indigo-400 to-amber-300 rounded-xl ">
        <p className="tracking-wide leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Expedita assumenda
           exercitationem dolorem nemo debitis sit repellat, dolor reprehenderit quia optio odit 
           neque eius qui ducim</p>
        <h4 className="uppercase italic">Rehan g</h4>
       </div>
       
       
      
       




       <div className="p-2 max-w-xs m-3 bg-gradient-to-t from-indigo-400 to-amber-300 rounded-xl">
        <p>Lorem ipsum dolor sit amet consectetur a
          eligendi minima quaerat molestiae nobis mai
           Autem nostrum, culpa veniam officiis co</p>
        <h4>shehba g</h4>
       </div>

       <div className="p-2 max-w-xs m-3 bg-gradient-to-t from-indigo-400 to-amber-300 rounded-xl">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Fugiat repellat possimus incidunt, non totam officia. Molestiae esse iure totam 
          repellendus corrupti distinctio explicabo i</p>
        <h4>humna g</h4>
       </div>

        </div>






{/*   navbar  */}
        <div className=" flex justify-between bg-yellow-400 m-4 p-6 rounded-xl">

             <div className="bg-indigo-500 hover:bg-lime-600 rounded-2xl px-4 py-2">
              about
             </div>
             <div className = "bg-indigo-500 rounded-2xl px-4 py-2">Profile</div>
             <div className="bg-indigo-500 rounded-2xl px-4 py-2">Contact</div>
             <div className=" bg-indigo-500 rounded-2xl px-4 py-2">Setting</div>
        </div>



{/*    text and 2 button */}

       <div className="text-2xl text-white  mt-8 mb-8 justify-between bg-slate-600 max-w-xs m-auto rounded-xl p-8">
        <div>    
        <h1 className="text-green-600 font-bold">Welcom to the Panavers</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing
           elit. Minima laboriosm emet, lorem
            sit
           perspiciatis 
          veritatis, non assumenda laboriosam 
          sunt quasi sit expedit</p>
             </div>


          <div className="flex justify-between mt-4">

        <button className="bg-slate-900 text-white hover:bg-red-600 rounded-xl px-2 py-2">Prev</button>
        <button className="bg-slate-900 text-white hover:bg-red-600 rounded-xl px-2 py-2">Next</button>
       </div>
       </div> 




{/* email subscribe */}



<div className="flex justify-center bg-teal-200 max-w-6xl mx-auto m-5 p-3">

<input type="email" placeholder="Enter your email"
className="text-white rounded-1 p-2 w-auto max-w-none bold py-2 px-4 rounded-r-2xl flex-grow-[3]"/> 
<button type="submit" className="bg-gray-700 hover:bg-cyan-700 text-white py-2 px-4 rounded-r-2xl flex-grow-[1]">Sbuscribe</button>
</div>



{/* ..........text read more button */}

<div className="flex flex-col w-96 h-96 mx-auto bg-teal-100 p-5">
  <h2 className="text -xl font-bold">welcome to the tailwin css</h2>
  <p className="text-sm m-4 flex-grow">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis eos voluptates nobis, 
    eaque, voluptatem sequi minima repellendus culpa</p>
  <button type="submit" className="bg-teal-500 text-white font-bold py-2 px-4 rounded ">Read more</button>
</div>




{/*..............email  address and subsribe*/}

<div className="bg-slate-300 max-w-5xl mx-auto">
  <div className="bg-green-300 rounded-xl p-8 shadow-md flex">
    <input type="email" placeholder="Email Address" className=" border-solid border-2 flex-glow w-auto max-w-none"></input>
    <button type="submit" className="bg-yellow-800 text-white p-3 border border-r-xl">Subscribe</button>

  </div>



{/*..................*/}

<div className="bg-teal-100 rounded-md flex p-5 items-start m-12">
  <div>
<h1 className="text-3xl font-bold">Welcome to Pakistan</h1>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt fuga distinctio
   sed, enim dolorem enim</p>
  </div>
  <span className="bg-red-500 flex-shrink-0 p-2 rounded-full">10.00 Am</span>
  </div>
</div>


{/*...............*/}







<div className="bg-slate-400 h-screen w-screen flex p-24">
 
<div className="first-div bg-yellow-500 basis-1/2 rounded-l-lg">
  <h1 className="text-5xl font-bold mt-20">Learn</h1>
  </div>
  <div className="2nd div bg-green-500 rounded-r-lg basis-1/2 ">
  <h1 className="text-5xl font-bold mt-20">Teach</h1>  
  </div>

</div>



{/*...*/}





{/*

<div>

<div>
  <Image
  src={'https://images.pexels.com/photos/1445527/pexels-photo-1445527.jpeg?auto=compress&cs=tinysrgb&w=600'}

  alt='image' width={300} height={300} />
</div>


<div>
<Image src={'https://images.pexels.com/photos/5010664/pexels-photo-5010664.jpeg?auto=compress&cs=tinysrgb&w=600'}
alt='image' width={300} height={300} />
  <h1>seemran</h1>
  <p>full stack developer</p>

</div>
<div>
<Image src ={'https://images.pexels.com/photos/5876695/pexels-photo-5876695.jpeg?auto=compress&cs=tinysrgb&w=600'}
alt='image' width={300} height={300}/>

  <h1>Rehan</h1>  
  <p>Python developer</p>
</div>


</div>


*/}




<div className="wrapper my-2 mx-auto max-w-5xl bg-green-200">
  <div className="container flex max-w-none w-auto">
    <div className="plan flex-[50%] bg-white p-8 rounded-xl shadow-md mx-4">
      <h2>Stander</h2>
      <span>Monthly plan Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Quia modi architecto ipsa, quaerat minima ullam odit dignissimos
          deleniti,
          numquam officia eligendi temporibus 
        magnam! Aut doloremque, nemo ea deleniti ab quia?</span>
        <p>$25</p>

    </div>
    <div className="plan plan-highlight flex-1 p-8 rounded-xl shadow-md mx-4 bg-pink-600 text-white">
    <h2 className=" font-bold text-2xl">papular</h2>
    <span>Monthly plan</span>
    <p>$40</p>
  </div>


  <div className="plan flex-auto bg-white p-8 rounded-xl shadow-md mx-4">
<h2>Prenium</h2>
<span>Monthly plan</span>
<p>$55</p>
  </div>
</div>
</div>








<div className="container flex flex-col items-start max-w-none w-72 my-8 mx-auto">
  <img className="w-[300px] h-[300px]" src="" alt=""/>
  <span className="block mt-5 font-bold text-2xl text-cyan-800">$220
  </span>
  <h3 className="mt-2 font-bold text-xl">Comfort Grey Sneakers</h3>

  <p className="mt-2 text-gray-700">Lorem ipsum dolor sit a nemo sed 
  
    Nesciunt eum quae impedit itaque molestiae culp facilis?</p>

  <button className="mt-2 bg-cyan-600 text-white py-2 px-4 rounded-md text-sm self-end">Add to Card</button>
</div>





<div className="grid grid-cols-[auto,auto,auto] gap-4 place-items-center  h-screen w-screen">

  <div className="bg-pink-300 text-4xl font-extrabold self-center">Lorem ipsum dolor sit </div>
  <div className="bg-teal-500 text-xl font-extrabold">Hello world</div>
  <div className="bg-red-400 text-4xl font-extrabold">3</div>
  <div className="bg-yellow-300 text-4xl font-extrabold">wow there</div>
  <div className="bg-green-300 text-4xl font-extrabold">Hello world hey</div>
  <div className="bg-slate-500 text-4xl font-extrabold">6</div>
  <div className="bg-orange-900 text-4xl font-extrabold">7</div>
</div>












</div>
  );
}