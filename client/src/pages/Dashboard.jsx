import { GoArrowRight } from "react-icons/go";
import { quickActions } from "../constants/dashboard";

const Dashboard = () => {
    return (
        <main className="relative">
            <div className="absolute top-0 -z-10 bg-linear-to-br from-violet-700 via-violet-500 to-violet-400 h-55 w-full"></div>
            <section className="px-6 md:px-14 py-8">
                <div className="space-y-2">
                    <h2 className="text-3xl sm:text-4xl text-white font-medium">Welcome John Doe !</h2>
                </div>
                <div className="w-full mt-12 rounded-xl border border-neutral-400 bg-[#f7f7f7] p-4 shadow-sm">
                    <textarea
                        placeholder="Start typing or paste your text here..."
                        className="w-full h-30 resize-none rounded-xl bg-transparent p-4 text-gray-700 placeholder:text-gray-400 focus:outline-none"
                        maxLength={MAX_LENGTH}
                    ></textarea>
                    <div className="flex items-center gap-6 justify-end">
                        <button className="rounded-2xl bg-gray-500 px-6 py-3 text-white transition hover:bg-gray-600 cursor-pointer">
                            Generate speech
                        </button>
                    </div>
                </div>
                <div className="mt-14 space-y-4">
                    <h1 className="text-2xl font-medium">Quick Actions</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        {quickActions.map((action, index) => (
                            <div
                                key={index}
                                className="flex flex-col sm:flex-row gap-4 rounded-lg p-4 border border-gray-300 bg-white/60"
                            >
                                <div
                                    className={`bg-linear-to-r ${action.gradient} w-full sm:w-32 md:w-40 h-32 sm:h-auto   rounded-lg flex items-center justify-center shrink-0`}
                                >
                                    <div className="bg-white/60 rounded-full w-10 h-10"></div>
                                </div>
                                <div className="flex flex-col flex-1 justify-between gap-4">
                                    <div className="space-y-2">
                                        <h2 className="text-neutral-700 font-medium">
                                            {action.title}
                                        </h2>
                                        <p className="text-neutral-500 text-sm">
                                            {action.description}
                                        </p>
                                    </div>
                                    <button className="flex items-center gap-2 w-fit py-2 px-3 rounded-xl border border-neutral-500 text-sm hover:bg-neutral-100 transition">
                                        Try Now
                                        <GoArrowRight />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Dashboard