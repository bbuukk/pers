Vim�UnDo� v����DUQ�aa���?��C;@���� ��o      const loaderArticle =                             gN��    _�                             ����                                                                                                                                                                                                                                                                                                                                                  V        gN��    �                  7// import { QueryClient } from '@tanstack/react-query';   @// import { buildGetMeQueryOptions } from 'hooks/auth/useGetMe';   //   ?// const loaderMe = (queryClient: QueryClient) => async () => {   
//   try {   P//     const data = await queryClient.ensureQueryData(buildGetMeQueryOptions());   //   //     return data;   //   } catch (error) {   //     return null;   //   }   // };   //   // export default loaderMe;5��                                  �      _      5�_�                           ����                                                                                                                                                                                                                                                                                                                                                  V        gN��     �               <const loaderMe = (queryClient: QueryClient) => async () => {5��              	           z       	               5�_�                           ����                                                                                                                                                                                                                                                                                                                                                  V        gN��     �               3const = (queryClient: QueryClient) => async () => {5��                         z                      5�_�                           ����                                                                                                                                                                                                                                                                                                                                                  V        gN��     �                 export default loaderMe;5��                         Z                     5�_�                           ����                                                                                                                                                                                                                                                                                                                                                  V        gN��     �                 export default ;5��                         Z                     5�_�                            ����                                                                                                                                                                                                                                                                                                                                                V       gN��     �      	       �             5��                                        N       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                V       gN��    �                 5��                                               5�_�      	                     ����                                                                                                                                                                                                                                                                                                                                                V       gN��    �             �             �                M    const data = await queryClient.ensureQueryData(buildGetMeQueryOptions());   M    const data = await queryClient.ensureQueryData(buildGetMeQueryOptions());5��                          �       �               �                          �               N      5�_�      
           	          ����                                                                                                                                                                                                                                                                                                                                          /       V       gN��     �                  try {5��                          �                      5�_�   	              
           ����                                                                                                                                                                                                                                                                                                                                                V       gN��     �   
                 return data;     } catch (error) {       return null;     }5��    
                            :               5�_�   
                        ����                                                                                                                                                                                                                                                                                                                                                V       gN��    �               B    const [articles, featuredArticles, tags] = await Promise.all([   K      queryClient.ensureQueryData(buildArticlesQueryOptions(searchParams)),   G      queryClient.ensureQueryData(buildFeaturedArticlesQueryOptions()),   =      queryClient.ensureQueryData(buildAllTagsQueryOptions())       ]);   0    return { articles, featuredArticles, tags };5��                       �                   5�_�                           ����                                                                                                                                                                                                                                                                                                                                                V       gN��     �                  �               5��                                               �                                               5�_�                            ����                                                                                                                                                                                                                                                                                                                                                V       gN��     �               �               5��                                        �      5�_�                           ����                                                                                                                                                                                                                                                                                                                                                V       gN��     �               const loaderArticle =5��                         "                     5�_�                           ����                                                                                                                                                                                                                                                                                                                                                V       gN��     �               const =5��                      	   "              	       �                         *                     �                        )                    �                        )                    �                         ,                     �                         +                     �                         *                     �                         )                     �                        (                    5�_�                           ����                                                                                                                                                                                                                                                                                                                                                V       gN��     �                 const loaderPublic=     (queryClient: QueryClient) =>   6  async ({ params, request }: LoaderFunctionArgs) => {        const articleId = params.id;   >    if (!articleId) throw new Error('Article ID is required');   .    if (isNaN(Number(articleId))) return null;   6    const searchParams = extractSearchParams(request);       '    return queryClient.ensureQueryData(   8      buildArticleQueryOptions(+articleId, searchParams)       );     };5��                               �      �      5�_�                            ����                                                                                                                                                                                                                                                                                                                                                V       gN��    �                   // const loaderPublic=5��                                               5��