import styled from "styled-components";

const list = [
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 4",
  "Item 5",
  "Item 6",
  "Item 7",
  "Item 8",
  "Item 9",
  "Item 10",
];

const StyledHeader = styled.ul`
  width: 100vw;
  background-color: lightgoldenrodyellow;
  display: flex;
  justify-content: space-evenly;
  margin: 0;
  padding: 0;
`;

export const Header = () => {
  return (
    <div>
      {list.map((item, i) => (
        <li className="nav-item " key={i} ref={navRefs.current[i]}>
          <a
            href={`#s-${i}`}
            className={`nav-link ${active === i ? "text-danger" : ""}`}
            onClick={(e) => {
              scrollTo(i);
            }}
          >
            {item}
          </a>
        </li>
      ))}
    </div>
  );
};
