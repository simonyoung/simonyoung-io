type Props = {
  errors?: string;
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const Error = ({ errors }: Props) => <p>{errors}</p>;

export default Error;
