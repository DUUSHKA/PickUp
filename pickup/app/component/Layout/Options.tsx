'use client'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { GiBasketballJersey, GiTennisCourt } from "react-icons/gi";
import { FaLock } from "react-icons/fa"
import {useRouter} from 'next/navigation';


export default function Options() {
  const router = useRouter()

  const handleCreateGameClick = () => {
    router.push('/create');
  };
  
  const handleFindGameClick = () => {
    router.push('/list');
  }
  
  const handleJoinGameClick = () => {
    router.push('/join');
  }
  
  return (
    <div className="h-screen flex justify-center gap-12 items-center">

      <Card className="border-[#ee7b42] border-4 bg-[#efcab1] hover:brightness-105" onClick={handleFindGameClick}>
        <CardHeader>
          <CardTitle>Find a Game</CardTitle>
        </CardHeader>
        <div className="flex items-center justify-center">
          <CardContent>
            <GiBasketballJersey size={64} />
          </CardContent>
        </div>
      </Card>

      <Card className="border-[#ee7b42] border-4 bg-[#efcab1] hover:brightness-105" onClick={handleJoinGameClick}>
        <CardHeader>
          <CardTitle>Join a Game</CardTitle>
        </CardHeader>
        <div className="flex items-center justify-center">
          <CardContent>
            <FaLock size={64} />
          </CardContent>
        </div>

      </Card>

      <Card className="border-[#ee7b42] border-4 bg-[#efcab1] hover:brightness-105" onClick={handleCreateGameClick}>
        <CardHeader>
          <CardTitle>Create a Game</CardTitle>
        </CardHeader>
        <div className="flex items-center justify-center">
          <CardContent>
            <GiTennisCourt size={64} />
          </CardContent>
        </div>
      </Card>


    </div>
  );
}