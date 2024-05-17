'use client';

import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface IBilionairs {
  id: string;
  name: string;
  squareImage: string;
  industries: string[];
  netWorth: number;
}

export default function Home() {
  const [billionaries, Setbillionaries] = useState([]);

  useEffect(() => {
    axios.get('https://billions-api.nomadcoders.workers.dev/').then((res) => Setbillionaries(res.data.splice(0, 20)));
  }, []);

  return (
    <>
      <div  className="grid grid-cols-4 gap-4 p-5">
        {billionaries.map((v: IBilionairs, i) => (
          <Link href={`/person/${v.id}`} key={v.id}>
            <figure className="w-60">
              <img src={v.squareImage} className="w-full h-full" alt="" />
            </figure>
            <figcaption className='flex flex-col'>
              <span className="text-sm">{v.name}</span>
              <span className="text-xs">
                {(v.netWorth / 1000).toFixed(0)} Billion/{v.industries}
              </span>
            </figcaption>
          </Link>
        ))}
      </div>
    </>
  );
}
