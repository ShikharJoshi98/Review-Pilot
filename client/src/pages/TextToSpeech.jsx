import { IoVolumeMediumOutline } from 'react-icons/io5';

const TextToSpeech = () => {
    return (
        <main className="relative">
            <div className="absolute top-0 -z-10 bg-linear-to-br from-blue-700 via-blue-500 to-blue-400 h-55 w-full"></div>
            <section className="py-8">
                <div className="space-y-2 px-6 md:px-14">
                    <h2 className="text-3xl sm:text-4xl text-white font-medium">Text to Speech</h2>
                </div>
                <div className='flex flex-col md:flex-row md:justify-between px-6 gap-8 md:gap-3 mt-12'>
                    <div className="w-full md:w-[70%] rounded-xl border border-neutral-400 bg-[#f7f7f7] p-4 shadow-sm">
                        <textarea
                            placeholder="Start typing or paste your text here..."
                            className="w-full border border-gray-300 h-50 resize-none rounded-xl bg-transparent p-4 text-gray-700 placeholder:text-gray-400 focus:outline-none"
                            maxLength={MAX_LENGTH}
                        ></textarea>
                        <div className="flex items-center gap-6 justify-end">
                            <button className="rounded-2xl bg-gray-500 mt-2 px-6 py-3 text-white transition hover:bg-gray-600 cursor-pointer">
                                Generate speech
                            </button>
                        </div>
                        <div className='rounded-xl py-4 px-6 mt-10 bg-white border border-gray-400'>
                            <p className='font-semibold flex items-center gap-1 text-neutral-700'>
                                <IoVolumeMediumOutline className="size-5" />
                                Preview will appear here
                            </p>
                            <p className='text-xs text-neutral-500 mt-1 px-2'>Once you generate your audio result will appear here. Sit back and relax.</p>
                        </div>
                    </div>
                    <div className="w-full md:w-[30%] h-30 rounded-xl border border-neutral-400 bg-white p-4 shadow-sm">
                        <h2>Settings</h2>
                        <div className='w-full h-px rounded-full bg-gray-300 my-3'></div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default TextToSpeech