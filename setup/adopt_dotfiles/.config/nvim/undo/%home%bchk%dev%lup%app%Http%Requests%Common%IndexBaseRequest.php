Vim�UnDo� X{�s�c	�Mt`��5zm��|��53�E      -class IndexArticleRequest extends FormRequest                             g'�J    _�                            ����                                                                                                                                                                                                                                                                                                                                                             g'��     �      	          -class IndexArticleRequest extends FormRequest5��                         Y                      5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             g'��     �      	          class extends FormRequest5��                         Y                      5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             g'��    �      	          class Index extends FormRequest5��                         ^                      �                        f                     5�_�                           ����                                                                                                                                                                                                                                                                                                                                                V       g'��    �                namespace App\Http\Requests;5��                         #                      �                        #                     5�_�                            ����                                                                                                                                                                                                                                                                                                                                                   V        g'�     �                       <?php       #namespace App\Http\Requests\Common;       +use Illuminate\Foundation\Http\FormRequest;       *class IndexBaseRequest extends FormRequest   {       /**   @     * Determine if the user is authorized to make this request.        */   %    public function authorize(): bool       {           return true;       }           /**   :     * Get the validation rules that apply to the request.        *   a     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>        */   "    public function rules(): array       {           return [   ;            'page' => ['sometimes', 'required', 'numeric'],   >            'perPage' => ['sometimes', 'required', 'numeric'],   9            'sort' => ['sometimes', 'required', 'array'],   S            'sort.created_at' => ['sometimes', 'required', 'string', 'in:asc,desc']   
        ];       }   }5�5�_�                            ����                                                                                                                                                                                                                                                                                                                                                   V        g'�5     �                   5�5�_�                           ����                                                                                                                                                                                                                                                                                                                                                   V        g'�8     �               %namespace App\Http\Requests\Articles;5��                         #                      5�_�      	                     ����                                                                                                                                                                                                                                                                                                                                                   V        g'�8    �               namespace App\Http\Requests\;5��                         #                      �                        %                     5�_�      
           	          ����                                                                                                                                                                                                                                                                                                                                                   V        g'�=     �               -class IndexArticleRequest extends FormRequest5��                         _                      5�_�   	              
          ����                                                                                                                                                                                                                                                                                                                                                   V        g'�>   	 �               class extends FormRequest5��                         _                      �                        e                     �                        e                     �                     	   h              	       �                         p                      5�_�   
                        ����                                                                                                                                                                                                                                                                                                                                                   V        g'�H     �               *class IndexBaseRequest extends FormRequest5��              	           _       	               5�_�                            ����                                                                                                                                                                                                                                                                                                                                                   V        g'�I    �               !class Request extends FormRequest5��                         _                      5��