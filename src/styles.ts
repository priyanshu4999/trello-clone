const classNames = {
    AppContainerStyle : (flag? : boolean) : string =>{return `flex flex-row items-start font-bold ${flag?'bg-[#010101]':'bg-[#010101]'} m-[8px] h-full w-full p-[10px] overflow-x-auto `},
    ColumnStyle : (flag? : boolean) :string  => `min-h-[30px] ${flag?'text-[#111111] bg-[#777777]':'text-[#777777] bg-[#0f0f0f]'}  m-[8px] rounded-[10px] p-[8px]  text-center hover:bg-[#303030]`,
    CardStyle: (flag? : boolean) : string => `${flag?'text-[#777777] bg-[#0f0f0f]':'text-[#111111] bg-[#777777]'} md:w-auto font-light rounded-[10px] min-w-[100px] max-w-[300px] shadow-[5px_5px_2px_rgba(10,10,10,0.5)] p-[8px] m-[8Px] font-bold text-center hover:shadow-[5px_5px_5px_rgba(0,0,0,1)]`,
    ThemeButtonStyle : (flag? : boolean):string =>`${flag?'text-[#111111] bg-[#707070]':'text-[#070707] bg-[#7f7f7f]'} p-[8px] m-[8px] rounded-[10px] text-center`,
    AddItemButtonProps : (flag? : boolean):string =>`${flag?'hover:bg-[#369]':'hover:bg-[#111]'} max-w-[300px] text-left transition-bg ease-in duration-[850ms] p-[8px] bg-[#000] rounded-[30px] border-none `,
  };
  
  export default classNames;
  