// IMPORTS
import CardComponent from "@/components/ui/cardComponent";
import FormComponent from "@/components/FormComponent";
import PageContainerComponent from "@/components/ui/pageContainerComponent";
import TitleComponent from "@/components/ui/title-component/TitleComponent";
import { auth } from "@/services/auth";
import { ILogin } from "@/interfaces/ILogin";

//COMPONENT
const LoginContainer = () => {
  const fields = [
    {
      label: 'Email',
      name: 'email',
      type: 'text',
      placeholder: 'Email',
      initialValue: '',
    },
    {
      label: 'Password',
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      initialValue: '',
    },
  ];
  console.log('Initial values', fields)

  const handleSubmit = async (values: ILogin) => {
    try{
      await auth.login(values)
    } catch(err) {
      //onFailure(err.message);
    }
  }

  return (
  <PageContainerComponent>
    <TitleComponent title='Sign in to your account'/>

    <CardComponent>
      <FormComponent fields={fields} onSubmit={handleSubmit} submitButtonLabel='Login' />
      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or continue with</span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3">
          <div>
            <button
              type="button"
              className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="sr-only">Sign in with Facebook</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 1 0-10.94 7.54V12H5v-2h2V8.54A2.54 2.54 0 0 1 9.54 6h1.92A2.54 2.54 0 0 1 14 8.54v2.92h2v2h-2v5.46A8.001 8.001 0 0 0 18 10z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          <div>
            <button
              type="button"
              className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="sr-only">Sign in with Twitter</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M20 4.74a8.19 8.19 0 0 1-2.36.64A4.04 4.04 0 0 0 19.36 3a8.22 8.22 0 0 1-2.6.99A4.1 4.1 0 0 0 12.93 6c0 .32.04.63.08.93A11.66 11.66 0 0 1 1.39 1.5a4.14 4.14 0 0 0-.56 2.09c0 1.44.74 2.71 1.86 3.46a4.07 4.07 0 0 1-1.86-.51v.05a4.12 4.12 0 0 0 3.3 4.04c-.55.15-1.13.19-1.72.07.47 1.47 1.82 2.51 3.23 3.87 3.99a8.23 8.23 0 0 1-4.82 1.56 8.78 8.78 0 0 1-1.03-.06 11.58 11.58 0 0 0 6.27 1.83c7.52 0 11.63-6.23 11.63-11.63 0-.18 0-.35-.01-.53A8.3 8.3 0 0 0 20 4.74z"
                  clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          <div>
          <button
            type="button"
            className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span className="sr-only">Sign in with GitHub</span>
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M10 0C4.48 0 0 4.48 0 10c0 4.41 2.87 8.14 6.84 9.46.5.09.68-.22.68-.49v-1.71c-2.79.6-3.37-1.34-3.37-1.34-.46-1.17-1.13-1.48-1.13-1.48-.92-.63.07-.62.07-.62 1.02.07 1.56 1.05 1.56 1.05.91 1.56 2.39 1.11 2.97.85.09-.66.35-1.11.63-1.36-2.2-.25-4.51-1.1-4.51-4.89 0-1.08.38-1.96 1.04-2.65-.1-.25-.45-1.26.1-2.62 0 0 .83-.27 2.72 1.01a9.47 9.47 0 0 1 2.49-.34c.85 0 1.7.11 2.49.34 1.89-1.28 2.72-1.01 2.72-1.01.55 1.36.2 2.37.1 2.62.65.69 1.04 1.57 1.04 2.65 0 3.8-2.32 4.63-4.54 4.87.36.3.68.91.68 1.83v2.71c0 .27.18.58.69.49C17.13 18.14 20 14.41 20 10c0-5.52-4.48-10-10-10z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    </CardComponent>
  </PageContainerComponent>
  )
}

export default LoginContainer;
