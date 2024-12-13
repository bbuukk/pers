Vim�UnDo� hc�$�
�Cx:x�,�Pz+�FS���G)   Q   describe('Counter', () => {                             gGY�    _�                     Q        ����                                                                                                                                                                                                                                                                                                                                       Q           V        gGWK    �               Q   Limport { render, screen, fireEvent, waitFor } from '@testing-library/react';   4import userEvent from '@testing-library/user-event';       'import Counter from './ExampleCounter';   -import { renderRoute } from 'tests/wrappers';       vi.mock('utils/axios', () => ({   $  getMe: vi.fn().mockResolvedValue({   
    id: 1,       name: 'John Doe',   "    email: 'john.doe@example.com',       email_verified_at: null,   '    created_at: '2023-01-01T00:00:00Z',   &    updated_at: '2023-01-01T00:00:00Z'     })   }));   $import { getMe } from 'utils/axios';       describe('Counter', () => {     beforeEach(() => {   R    vi.resetAllMocks(); // Reset all mocks before each test, so tests are isolated     });       &  it.only('renders correctly', () => {   *    const conatiner = render(<Counter />);   (    expect(conatiner).toMatchSnapshot();     });   /  it.only('calls getMe on mount', async () => {       render(<Counter />);   :    await waitFor(() => expect(getMe).toHaveBeenCalled());     });   K  it('renders initial count and increments when button is clicked', () => {       render(<Counter />);           // Check initial render       // getByText: RTL query   *    // toBeInTheDocument: jest-dom matcher   =    expect(screen.getByText('Count: 0')).toBeInTheDocument();       2    // Click button and check if count incremented   1    const button = screen.getByText('Increment');       // fireEvent : RTL API       fireEvent.click(button);   >    expect(screen.getByText(/count: 1/i)).toBeInTheDocument();   D    expect(screen.queryByText(/count: 0/i)).not.toBeInTheDocument();     });   @  it('updates the value of the input when typing on it', () => {       render(<Counter />);       1    const input = screen.getByLabelText('Name:');   ?    fireEvent.change(input, { target: { value: 'John Doe' } });   *    expect(input).toHaveValue('John Doe');     });   9  it('typing in an input - with userEvent', async () => {   #    const user = userEvent.setup();       render(<Counter />);       3    const textbox = screen.getByLabelText('Name:');   <    const testDataTestId = screen.getByTestId('name-input');   D    const testRole = screen.getByRole('textbox', { name: 'Name:' });   &    await user.type(textbox, 'Hello');       (    //screen.debug(undefined, Infinity);       )    expect(textbox).toHaveValue('Hello');     });       )  it('test counter in app', async () => {   #    const container = renderRoute({   >      memoryRouterOptions: { initialEntries: ['/playground'] }       });           // Check initial render   G    expect(await container.findByText('Count: 0')).toBeInTheDocument();       2    // Click button and check if count incremented   4    const button = container.getByText('Increment');       fireEvent.click(button);   @    expect(container.getByText('Count: 1')).toBeInTheDocument();     });   });5��            Q       Q               >
      $      5�_�                            ����                                                                                                                                                                                                                                                                                                                                       Q           V        gGWM     �          Q      O// import { render, screen, fireEvent, waitFor } from '@testing-library/react';5��                                                  5�_�                            ����                                                                                                                                                                                                                                                                                                                                       R           V        gGWM    �          R       5��                                                  �                                              5�_�                           ����                                                                                                                                                                                                                                                                                                                                       R           V        gGWQ    �                 //TODO:5��                                                  5�_�                    Q        ����                                                                                                                                                                                                                                                                                                                                       Q           V        gGY�     �               Q   O// import { render, screen, fireEvent, waitFor } from '@testing-library/react';   7// import userEvent from '@testing-library/user-event';   //   *// import Counter from './ExampleCounter';   0// import { renderRoute } from 'tests/wrappers';   //   "// vi.mock('utils/axios', () => ({   '//   getMe: vi.fn().mockResolvedValue({   //     id: 1,   //     name: 'John Doe',   %//     email: 'john.doe@example.com',   //     email_verified_at: null,   *//     created_at: '2023-01-01T00:00:00Z',   )//     updated_at: '2023-01-01T00:00:00Z'   //   })   // }));   '// import { getMe } from 'utils/axios';   //   // describe('Counter', () => {   //   beforeEach(() => {   U//     vi.resetAllMocks(); // Reset all mocks before each test, so tests are isolated   //   });   //   )//   it.only('renders correctly', () => {   -//     const conatiner = render(<Counter />);   +//     expect(conatiner).toMatchSnapshot();   //   });   2//   it.only('calls getMe on mount', async () => {   //     render(<Counter />);   =//     await waitFor(() => expect(getMe).toHaveBeenCalled());   //   });   N//   it('renders initial count and increments when button is clicked', () => {   //     render(<Counter />);   //   //     // Check initial render   //     // getByText: RTL query   -//     // toBeInTheDocument: jest-dom matcher   @//     expect(screen.getByText('Count: 0')).toBeInTheDocument();   //   5//     // Click button and check if count incremented   4//     const button = screen.getByText('Increment');   //     // fireEvent : RTL API   //     fireEvent.click(button);   A//     expect(screen.getByText(/count: 1/i)).toBeInTheDocument();   G//     expect(screen.queryByText(/count: 0/i)).not.toBeInTheDocument();   //   });   C//   it('updates the value of the input when typing on it', () => {   //     render(<Counter />);   //   4//     const input = screen.getByLabelText('Name:');   B//     fireEvent.change(input, { target: { value: 'John Doe' } });   -//     expect(input).toHaveValue('John Doe');   //   });   <//   it('typing in an input - with userEvent', async () => {   &//     const user = userEvent.setup();   //     render(<Counter />);   //   6//     const textbox = screen.getByLabelText('Name:');   ?//     const testDataTestId = screen.getByTestId('name-input');   G//     const testRole = screen.getByRole('textbox', { name: 'Name:' });   )//     await user.type(textbox, 'Hello');   //   +//     //screen.debug(undefined, Infinity);   //   ,//     expect(textbox).toHaveValue('Hello');   //   });   //   ,//   it('test counter in app', async () => {   &//     const container = renderRoute({   A//       memoryRouterOptions: { initialEntries: ['/playground'] }   
//     });   //   //     // Check initial render   J//     expect(await container.findByText('Count: 0')).toBeInTheDocument();   //   5//     // Click button and check if count incremented   7//     const button = container.getByText('Increment');   //     fireEvent.click(button);   C//     expect(container.getByText('Count: 1')).toBeInTheDocument();   //   });   // });5��            Q       Q               $      >
      5�_�                            ����                                                                                                                                                                                                                                                                                                                                       Q           V        gGY�    �         Q      describe('Counter', () => {5��                                              5��