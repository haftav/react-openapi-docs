import { ParameterObject, ReferenceObject } from '@models';
import { isReferenceObject } from '@utils';

interface ParametersProps {
  parameters: (ParameterObject | ReferenceObject)[] | undefined;
}

const Parameters = ({ parameters }: ParametersProps) => {
  if (!parameters) {
    return null;
  }

  return (
    <div>
      <h3>Parameters</h3>
      <table className="table-auto">
        <thead className="border border-gray-800">
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>In</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {parameters.map((parameter) => {
            if (isReferenceObject(parameter)) {
              // get referenced object and do things
            } else {
              return (
                <tr key={parameter.name}>
                  <td>{parameter.name}</td>
                  <td>todo</td>
                  <td>{parameter.in}</td>
                  <td>{parameter.description}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Parameters;
