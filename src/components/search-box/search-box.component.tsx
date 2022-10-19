import './search-box.style.css';

import { ChangeEvent } from 'react';



// const func: (a: string, b: number, c: boolean) => boolean = (a, b, c) => { }// return void if no return is expected

// interface ISearchBoxProps {
//     className: string;
//     placeholder?: string;
// }

// interface ISearchBoxProps {
//     onChangeHandler: (a: string) => void
// }

// const name: string = 'name'

type SearchBoxProps = {
    className: string;
    placeholder?: string;
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}




const SearchBox = ({
    className,
    placeholder,
    onChangeHandler
}: SearchBoxProps) => {

    return (
        <input
            className={`search-box ${className} `}
            type='search'
            placeholder={placeholder}
            onChange={onChangeHandler} />
    )
}


export default SearchBox;