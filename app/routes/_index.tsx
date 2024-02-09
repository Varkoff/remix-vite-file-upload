import {
	unstable_createMemoryUploadHandler,
	unstable_parseMultipartFormData,
	type ActionFunctionArgs,
} from '@remix-run/node';
import { Form } from '@remix-run/react';

export const action = async ({ request }: ActionFunctionArgs) => {
	const formData = await unstable_parseMultipartFormData(
		request,
		unstable_createMemoryUploadHandler({ maxPartSize: 1024 * 1024 * 100 })
	);
	console.log(formData.get('file'));
	return null;
};

export default function Index() {
	return (
		<Form encType='multipart/form-data' method='POST'>
			<input type='file' accept='image/*' name='file' />
			<button type='submit'>Submit</button>
		</Form>
	);
}
