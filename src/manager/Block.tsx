interface BlockProps {
         onClick: Function;
         currentState: string;
         ai: Boolean;
}

export default function Block(props: BlockProps) {
         return (
                  <div className={`border-black dark:border-white p-0 flex justify-center items-center rounded-sm border-8 w-[10rem] h-[10rem] ${props.currentState === "" && !props.ai ? "cursor-pointer" : ""}`} onClick={() => {
                           if (props.currentState === "" && !props.ai) {
                                    props.onClick();
                           }
                  }}>
                           <span className="block text-8xl font-sans" style={{"userSelect": "none"}}>{props.currentState}</span>
                  </div>
         );
}