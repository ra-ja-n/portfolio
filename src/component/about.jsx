import React from 'react'

const About = () => {
  return (
    <div name='about' className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
    <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                About
            </p>
        </div>

        <p className='text-xl mt-20'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quod at laborum? Eius minus quidem blanditiis totam distinctio eaque rem itaque et tempora quia, sequi quos debitis esse delectus consequatur fugit sit neque? Temporibus reiciendis repellendus dolor laudantium facere ab, accusamus, repellat ullam, voluptatibus pariatur iste voluptas aliquam dolore quaerat.
        </p>
        <p className='text-xl mt-20'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel facilis doloribus tempore dolor minus? Fuga excepturi eum pariatur itaque aliquid expedita ullam optio numquam iure eaque ipsum quibusdam dicta dolores sint minima quia aspernatur esse similique perspiciatis obcaecati amet consectetur, quam voluptas magnam? Quisquam porro sint, veniam id earum sit.
        </p>
    </div>
</div>
  );
}
export default About;