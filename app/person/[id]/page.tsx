'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface IProps {
  params: {
    id: string;
  };
}

interface PersonDetail {
  squareImage: string;
  name: string;
  netWorth: number;
  country: string;
  industries: string[];
  bio: string;
}

export default function PersonDetail({ params }: IProps) {
  const [billionariesDetail, SetbillionariesDetail] = useState<PersonDetail | null>(null);

  useEffect(() => {
    axios
      .get(`https://billions-api.nomadcoders.workers.dev/person/${params.id}`)
      .then((res: any) => SetbillionariesDetail(res.data));
  }, []);

  return (
    <div className="w-screen min-h-screen p-5">
      <img src={billionariesDetail?.squareImage} alt="" />
      <p>이름 : {billionariesDetail?.name}</p>
      <p>재산 : {billionariesDetail && (billionariesDetail.netWorth/1000).toFixed(0)}</p>
      <p>나라 : {billionariesDetail?.country}</p>
      <p>분야 : {billionariesDetail?.industries}</p>
      <p>{billionariesDetail?.bio}</p>
    </div>
  );
}
