Vim�UnDo� �qq+��� G�	��Ei���p�L
�ΐ�^��@   6                                  g-�    _�                             ����                                                                                                                                                                                                                                                                                                                                                             g-�     �                   �               5��                   6                      �      5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             g-�    �          3       �         7      2    public function test_list_all_articles(): void       {   0        Article::factory()->count(15)->create();               $perPage = 5;           $response = $this->get(   0            "/api/articles/?&perPage={$perPage}"   
        );�      !   7              $response               ->assertStatus(200)   #            ->assertJsonStructure([                   'data' => [                       '*' => [                           'id',                            'title',   "                        'content',   %                        'created_at',   %                        'updated_at',                            'author'                       ]                   ],                   'next_cursor',                   'prev_cursor'               ])   /            ->assertJsonCount($perPage, 'data')               ->assertJson([   '                'per_page' => $perPage,               ]);       }�   !   %   7      ;    public function test_list_and_sort_all_articles(): void       {   0        Article::factory()->count(15)->create();�   %   *   7              $perPage = 5;           $response = $this->get(   F            "/api/articles/?perPage={$perPage}&sort[created_at]=desc",   
        );�   *   ,   7      %        $response->assertStatus(200);�   ,   .   7      0        $responseData = $response->json('data');�   .   0   7      <        $values = array_column($responseData, 'created_at');�   0   4   7              //todo valid?            $sortedValues = $values;           rsort($sortedValues);�   4              K        //check if array of original created_at values equals to sorted one   q        $this->assertEquals($sortedValues, $values, "The array is not sorted in descending order by created_at");       }5��    4                    '      �       �       �    0                    �      ?       '       �    .                      �                     �    ,                      a                     �    *                      :                     �    %                    �      �       a       �    !                    =      J       :       �                        �       Z      �       �                               �       K       �                                           Z       5��