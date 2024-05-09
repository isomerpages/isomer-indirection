import { Record } from "@pulumi/aws/route53";
// import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [

    new Record("biblioasia.nlb.gov.sg CNAME", {
      name: "biblioasia-nlb-gov-sg",
      type: "CNAME",
      zoneId: zoneId,
      ttl: 300,
      records: ["nlb-ba-prod.netlify.app"],

    }),

    //   new Record("biblioasia.nlb.gov.sg A", {
    //     name: "biblioasia-nlb-gov-sg",
    //     type: "A",
    //     zoneId: zoneId,
    //     aliases: [
    //       {
    //         name: "d28tcbr3qus6k6.cloudfront.net",
    //         zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
    //         evaluateTargetHealth: false,
    //       },
    //     ],
    //   }),
    //
    //   new Record("biblioasia.nlb.gov.sg AAAA", {
    //     name: "biblioasia-nlb-gov-sg",
    //     type: "AAAA",
    //     zoneId: zoneId,
    //     aliases: [
    //       {
    //         name: "d28tcbr3qus6k6.cloudfront.net",
    //         zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
    //         evaluateTargetHealth: false,
    //       },
    //     ],
    //   }),


  ];

  return records;
};
