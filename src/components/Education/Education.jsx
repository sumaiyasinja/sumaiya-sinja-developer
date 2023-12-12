
const Education = () => {
    return (
        <section className="">
        <div className="container max-w-5xl px-4 py-12 mx-auto">
            <div className="grid gap-4 mx-4 sm:grid-cols-12">
                <div className="col-span-12 sm:col-span-3">
                    <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-teal-600">
                        <h3 className="text-3xl font-semibold">Education</h3>
                        <span className="text-sm font-bold tracki uppercase text-gray-600">Academic degree</span>
                    </div>
                </div>
                <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                    <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-300">
                        <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-teal-600">
                            <h3 className="text-xl font-semibold tracki">BSc in Computer Science & Engibneering</h3>
                            <time className="text-xs tracki uppercase text-gray-600">Dec 2023</time>
                            <p className="mt-3 text-gray-600">Institude: R. P. Shaha University</p>
                        </div>
                        <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-teal-600">
                            <h3 className="text-xl font-semibold tracki">Higher Secondary Certificate</h3>
                            <time className="text-xs tracki uppercase text-gray-600">School of 2019</time>
                            <p className="mt-3 text-gray-600">Institude: Govt. Haraganga College</p>
                        </div>
                        <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-teal-600">
                            <h3 className="text-xl font-semibold tracki"> Secondary School Certificate</h3>
                            <time className="text-xs tracki uppercase text-gray-600">School of 2017</time>
                            <p className="mt-3 text-gray-600">Institude: Basirannesa High School</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Education;