import Image from "next/image";

export const Loader = () => {
    return (
        <div className="h-full flex flex-col items-center justify-center"> {/* Centering container */}
            <div className="w-14 h-14 relative animate-pulse"> {/* Centering container */}
                <Image
                   alt="Loader"
                   fill
                   src="/logo.png"
                />
            </div>
            <p className="text-sm text-muted-forground">
                ArjumanAI is thinking...
            </p>
        </div>
    );
}
