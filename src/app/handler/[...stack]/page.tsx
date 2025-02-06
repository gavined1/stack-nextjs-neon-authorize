import { StackHandler } from "@stackframe/stack";
import { stackServerApp } from "@/utils/stack";

export default function Handler(props: any) {
  return <StackHandler fullPage app={stackServerApp} routeProps={props} />;
}
