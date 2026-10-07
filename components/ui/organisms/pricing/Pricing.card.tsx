// import React from "react";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/atoms/card/card";
// const PricingCard = () => {
//   return           <Card
//             key={pricing.title}
//             className={
//               pricing.title.toUpperCase() === plan.toUpperCase()
//                 ? "bg-gray-800"
//                 : ""
//             }
//           >
//             <CardHeader>
//               <CardTitle className="flex item-center justify-between">
//                 {pricing.title}
//                 {pricing.popular === PopularPlanType.YES ? (
//                   <Badge variant="secondary" className="text-sm text-primary">
//                     Most popular
//                   </Badge>
//                 ) : null}
//               </CardTitle>
//               <div>
//                 <span className="text-3xl font-bold">${pricing.price}</span>
//                 <span className="text-muted-foreground">
//                   {" "}
//                   {pricing.billing}
//                 </span>
//               </div>

//               <CardDescription>{pricing.description}</CardDescription>
//             </CardHeader>

//             <CardContent>
//               {" "}
//               {userData?.user &&
//               pricing.title.toUpperCase() === plan.toUpperCase() ? (
//                 <H2 variant={"primary"}> Current Active Plan</H2>
//               ) : pricing.title.toUpperCase() === "FREE" ? (
//                 data.cancelAt ? (
//                   <H2 size={"md"}>
//                     This Subscription Will Be Active Starting At:
//                     <strong className="text-primary">
//                       {" " + new Date(data.cancelAt).toDateString()}
//                     </strong>
//                   </H2>
//                 ) : (
//                   <BillingPortalButtonMolecule
//                     referenceId={userData?.user.id}
//                     returnUrl="/pricing"
//                     text={"Cancel subscription"}
//                   />
//                 )
//               ) : (
//                 <PaymentButtonMolecule
//                   successUrl={pricing.successUrl!}
//                   cancelUrl={pricing.cancelUrl!}
//                   plan={pricing.plan!}
//                   href={pricing.href}
//                   text={pricing.buttonText}
//                 />
//               )}
//             </CardContent>

//             <hr className="w-4/5 mx-auto mb-4" />

//             <CardFooter className="flex">
//               <div className="space-y-4">
//                 {pricing.benefitList.map((benefit: string) => (
//                   <span key={benefit} className="flex">
//                     <Check className="text-primary" />{" "}
//                     <h3 className="ml-2">{benefit}</h3>
//                   </span>
//                 ))}
//               </div>
//             </CardFooter>
//           </Card>;
// };

// export default PricingCard;
