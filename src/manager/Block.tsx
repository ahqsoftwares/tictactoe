const indexMap: string[] = [
         "border-b-4 border-r-4",
         "border-l-4 border-r-4 border-b-4",
         "border-l-4 border-b-4",
         "border-t-4 border-r-4 border-b-4",
         "border-t-4 border-b-4 border-l-4 border-r-4",
         "border-l-4 border-b-4 border-t-4",
         "border-r-4 border-t-4",
         "border-t-4 border-r-4 border-l-4",
         "border-l-4 border-t-4"
];

interface BlockProps {
         onClick: Function;
         currentState: string;
         ai: Boolean;
         index: number;
}

export default function Block(props: BlockProps) {
         return (
                  <div className={`border-black dark:border-white p-0 flex justify-center items-center border-0 ${indexMap[props.index]} min-w-[10rem] min-h-[10rem] ${props.currentState === "" && !props.ai ? "cursor-pointer" : ""}`} onClick={() => {
                           if (props.currentState === "" && !props.ai) {
                                    props.onClick();
                           }
                  }}>
                           <span className="block text-8xl font-sans" style={{"userSelect": "none"}}>{props.currentState}</span>
                  </div>
         );
}