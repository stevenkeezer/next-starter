import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


export function QuickForm() {
  return (
    <Card className="w-full bg-white text-slate-900 h-80 rounded-none border-none p-2 mt-10 shadow">
      <CardHeader>
        <CardTitle>Ready to get started?</CardTitle>
        <CardDescription>Already convinced? Get in touch with us.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Email</Label>
              <Input id="name" className="bg-white text-slate-800 border-slate-200/80 bg-slate-100 rounded-none" placeholder="Your email" />
            </div>
           
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button className="bg-[#0c2d53] w-full text-white">Get in touch</Button>
      </CardFooter>
    </Card>
  )
}
