import { PathObject } from '../interfaces';

interface PathProps {
  path: PathObject;
  pattern: string;
}

const Path = ({ path, pattern }: PathProps) => {
  return (
    <div className="border-b border-green-500">
      <h2>{pattern}</h2>
      {path.get && <div>get</div>}
      {path.put && <div>put</div>}
      {path.post && <div>post</div>}
    </div>
  );
};

export default Path;
