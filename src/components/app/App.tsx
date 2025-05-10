import type { Votes } from "../../types/votes";
import CafeInfo from "../cafeinfo/CafeInfo";
import VoteOptions from "../voteoptions/VoteOptions";
import VoteStats from "../votestats/VoteStats";
import Notification from "../notification/Notification";
import css from "./App.module.css";
import { useState } from "react";


export default function App() {
  const [votes, setVotes] = useState<Votes>({ good: 0, bad: 0, neutral: 0 });
  const handleVote = (type: keyof Votes): void => {
    setVotes({
      ...votes,
      [type]: votes[type] + 1,
    });
  };
  const resetVotes = (): void => {
    setVotes({
      ...votes,
      good: 0,
      bad: 0,
      neutral: 0,
    })
  }
  const totalVotes: number = votes.good + votes.bad + votes.neutral;
  const positiveRate: number = totalVotes ? Math.round((votes.good / totalVotes) * 100) : 0;
  return <div className={css.app}>
    <CafeInfo />
    <VoteOptions onVote = {handleVote} onReset={resetVotes} canReset={totalVotes ? true : false}/>
    {totalVotes ?  <VoteStats votes={votes} totalVotes={totalVotes} positiveRate={positiveRate} /> : <Notification />}
  </div>;
}
