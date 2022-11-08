export function Welcome() {
    return (
        <div className="flex h-screen w-full flex-col items-center justify-center dark:bg-dark-900 dark:text-white">
            <h1 className="text-4xl">Quick RPS</h1>
            <form className="flex flex-col items-center justify-center gap-5 p-10 text-3xl">
                <button
                    className="w-full rounded p-5 dark:bg-dark-800"
                    onClick={(e) => {
                        e.preventDefault();
                    }}>
                    Create Game
                </button>
                <input
                    placeholder="Join"
                    className="w-full rounded border-2 border-white p-4 text-center placeholder:text-dark-300 dark:bg-dark-900 dark:text-white"></input>
            </form>
        </div>
    );
}
