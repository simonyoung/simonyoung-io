import Layout from './Layout';

type Props = {
  errors?: string;
};

const Error = ({ errors }: Props) => <p>{errors}</p>;

export default Error;
