"use client";

import PropTypes from 'prop-types';

const LegalDocs = ({ mou }) => {
  return (
    <article className="flex flex-col self-start my-3">
      <ol className="list-decimal list-inside flex flex-col gap-5">
        {mou.map((item) => (
          <li key={item.id}>
            <h2 className="text-lg inline font-semibold">
              {item.title}
            </h2>
            <p className="">{item.text}</p>
            {item.list && (
              <ul className="list-disc list-inside mt-3">
                {item.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
            {item.additon && <p className="m-3">{item.addition}</p>}
            {item.subtext && <p className="m-3">{item.subtext}</p>}
            {item?.sublist && (
              <ul className="list-disc list-inside">
                {item.sublist.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </article>
  )
};

LegalDocs.propTypes = {
  mou: PropTypes.array.isRequired
}

export default LegalDocs;
