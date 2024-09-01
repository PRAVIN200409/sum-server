import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Card = () => {
    const [first, setFirst] = useState('');
    const [second, setSecond] = useState('');
    const [result, setResult] = useState(null);
    const [operation, setOperation] = useState(''); 
    
    const add = async () => {
        try {
            if (first === '' || second === ''){
                setResult('Please provide valid numbers');
                setOperation('');
                return;
            } 
            const res = await axios.post(`http://localhost:5000/api/sum`, {
                a: parseFloat(first),
                b: parseFloat(second)
            });
            setResult(res.data.sum);
            setOperation(`Addition = `);
        } catch (err) {
            console.log(err);
        }
    };

    const sub = async () => {
        try {
            if (first === '' || second === ''){
                setResult('Please provide valid numbers');
                setOperation('');
                return;
            } 
            const response = await axios.post(`http://localhost:5000/api/diff`, {
                a: parseFloat(first),
                b: parseFloat(second)
            });
            setResult(response.data.diff);
            setOperation(`Subtraction = `);
        } catch (err) {
            console.log(err);
        }
    };

    const mul = async () => {
        try {
            if (first === '' || second === ''){
                setResult('Please provide valid numbers');
                setOperation('');
                return;
            } 
            const response = await axios.post(`http://localhost:5000/api/mul`, {
                a: parseFloat(first),
                b: parseFloat(second)
            });
            setResult(response.data.mul);
            setOperation(`Multiplication = `);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className='h-[90vh] items-center flex justify-center p-2'>
            <div className="h-96 w-96 border-4 border-solid border-white rounded-md flex flex-col items-center gap-5">
                <h1 className='font-poppins text-[23px] font-semibold rounded-md px-4 py-2'>
                    Welcome to Sum-Server
                </h1>
                <div>
                    <p className='font-poppins text-[19px]'>Enter your numbers</p>
                </div>
                <div className='flex flex-row gap-6'>
                    <input
                        type="number"
                        className='w-[120px] border-2 border-solid border-gray-500 rounded-md p-1 mt-2'
                        placeholder='First'
                        value={first}
                        onChange={(e) => setFirst(e.target.value)}
                    />
                    <input
                        type="number"
                        className='w-[120px] border-2 border-solid border-gray-500 rounded-md p-1 mt-2'
                        placeholder='Second'
                        value={second}
                        onChange={(e) => setSecond(e.target.value)}
                    />
                </div>
                <div className='flex flex-row gap-16 mt-3'>
                    <button
                        className='border-2 border-white px-2 py-1 rounded-lg hover:bg-white hover:text-black hover:scale-[1.1] transition-all duration-150'
                        onClick={add}
                    >
                        Add
                    </button>
                    <button
                        className='border-2 border-white px-2 py-1 rounded-lg hover:bg-white hover:text-black hover:scale-[1.1] transition-all duration-150'
                        onClick={sub}
                    >
                        Sub
                    </button>
                    <button
                        className='border-2 border-white px-2 py-1 rounded-lg hover:bg-white hover:text-black hover:scale-[1.1] transition-all duration-150'
                        onClick={mul}
                    >
                        Mul
                    </button>
                </div>
                {result !== null && <div className='mt-6 flex flex-row'>
                    <p className='font-poppins text-[19px]'>{operation}{result}</p>
                </div>}
            </div>
        </div>
    );
};

export default Card;
