export interface MyComponentProps {
  title?: string;
}

const MyComponent: React.FC<MyComponentProps> = ({title}) => {
  return (
    <div>
      {title && (
        <header>
          <h1>MyComponent</h1>
        </header>
      )}

      <p>This is MyComponent</p>
    </div>
  );
};

export default MyComponent;
