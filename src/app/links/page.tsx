"use client";
import { ZodType, z, ZodSchema } from "zod";
import { useRouter } from "next/navigation";

const Links = () => {
  const router = useRouter();
  const searchQuerySchema = z.object({
    query: z.string().trim(),
  });
  //   console.log("router", router);
  //   const searchQuerySchema = z.object({
  //     query: z.string().trim(),
  //   });
  //   console.log("searchQuerySchema", searchQuerySchema);
  //   const getSafeParams = <T, S extends ZodType<T>>(
  //     schema: S,
  //     params: unknown
  //   ): T | undefined => {
  //     console.log("params", params);
  //     const parsedParams = schema.safeParse(params);
  //     console.log("parsedParams", parsedParams);
  //     return parsedParams.success ? parsedParams.data : undefined;
  //   };

  //   type SearchQuery = z.infer<typeof searchQuerySchema>;

  //   const safeParam = getSafeParams<SearchQuery, typeof searchQuerySchema>(
  //     searchQuerySchema,
  //     {
  //       query: "",
  //       ...router,
  //     }
  //   );
  //   console.log("safeParam", safeParam);
  return <div>Links</div>;
};

export default Links;
