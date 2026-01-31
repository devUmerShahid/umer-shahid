export default function About() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-8">
          About Me
        </h1>

        {/* Intro paragraph */}
        <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed">
          Assalam-o-Alaikum! Main Umer Shahid hoon. Islamabad se hoon aur web development seekh raha hoon. 
          Abhi Next.js, React aur Tailwind CSS pe kaam kar raha hoon. Mera maqsad hai ke achhi aur fast websites banaun jo logon ke kaam aayein. 
          Bohot jaldi professional banne ki koshish mein hoon! 🚀
        </p>

        {/* Skills section */}
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Skills I'm Learning
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          <span className="bg-blue-100 text-blue-800 px-6 py-3 rounded-full font-medium">
            HTML & CSS
          </span>
          <span className="bg-blue-100 text-blue-800 px-6 py-3 rounded-full font-medium">
            JavaScript
          </span>
          <span className="bg-blue-100 text-blue-800 px-6 py-3 rounded-full font-medium">
            React.js
          </span>
          <span className="bg-blue-100 text-blue-800 px-6 py-3 rounded-full font-medium">
            Next.js
          </span>
          <span className="bg-blue-100 text-blue-800 px-6 py-3 rounded-full font-medium">
            Tailwind CSS
          </span>
          {/* Aur skills add kar sakte ho baad mein */}
        </div>

        {/* Future photo placeholder */}
        <div className="mt-12">
          <div className="w-48 h-48 md:w-64 md:h-64 mx-auto bg-gray-300 rounded-full flex items-center justify-center text-gray-500">
            Your Photo Here
          </div>
          <p className="mt-4 text-gray-600"> (Real photo daal denge baad mein)</p>
        </div>
      </div>
    </main>
  );
}