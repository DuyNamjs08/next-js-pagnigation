import React from "react";
import styled from "styled-components";
import {
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineChevronDoubleRight,
  HiOutlineChevronDoubleLeft,
} from "react-icons/hi";
interface PagnigationTypse {
  total: number;
  current: number;
  setCurrent: (newCurrent: number) => void;
  setPanigationPergage: (newPergage: number) => void;
  decreaseCurrent: () => void;
  increaseCurrent: () => void;
  panigationPergage: number;
}

const Pagnigation = (props: PagnigationTypse) => {
  const {
    total,
    current,
    setCurrent,
    setPanigationPergage,
    panigationPergage,
    decreaseCurrent,
    increaseCurrent,
  } = props;

  const pageSizeOptions = [10, 15, 20];
  const handlePagination = (current: number) => {
    setCurrent(current);
  };
  return (
    <StyleNav>
      <StyleUl>
        <li className={` ${current === 1 ? "disabled" : ""}`}>
          <div
            className="pick-main"
            onClick={() => setCurrent(1)}
            aria-disabled="true"
          >
            <HiOutlineChevronDoubleLeft />
          </div>
        </li>
        <li className={` ${current === 1 ? "disabled" : ""} prev-one`}>
          <div
            className="pick-main"
            onClick={() => decreaseCurrent()}
            aria-disabled="true"
          >
            <HiOutlineChevronLeft />
          </div>
        </li>
        <div className="highlight">
          {total < 5 ? (
            <>
              {Array(total)
                .fill(1)
                .map((item, index) => (
                  <li
                    key={index}
                    className={`pick ${current === index + 1 ? "active" : ""}`}
                    onClick={() => handlePagination(index + 1)}
                  >
                    <div className="pick">{index + 1}</div>
                  </li>
                ))}
            </>
          ) : current % 5 >= 0 && current > 4 && current + 3 < total ? (
            <>
              <li>
                <div className="pick" onClick={() => handlePagination(1)}>
                  1
                </div>
              </li>
              <li>
                <div className="disabled pick">...</div>
              </li>
              <li className="pick">
                <div onClick={() => handlePagination(current - 1)}>
                  {current - 1}
                </div>
              </li>
              <li className="active pick">
                <div onClick={() => handlePagination(current)}>{current}</div>
              </li>
              <li>
                <div
                  className="pick"
                  onClick={() => handlePagination(current + 1)}
                >
                  {current + 1}
                </div>
              </li>
              <li>
                <div className="page-link disabled pick">...</div>
              </li>
              <li
                className={`pick ${
                  props.current === props.total ? "active" : ""
                }`}
              >
                <div className="pick" onClick={() => handlePagination(total)}>
                  {total}
                </div>
              </li>
            </>
          ) : current % 5 >= 0 && current > 2 && current + 3 >= total ? (
            <>
              <li>
                <div className="pick" onClick={() => handlePagination(1)}>
                  1
                </div>
              </li>
              <li>
                <div className="pick disabled">...</div>
              </li>
              <li
                className={`pick ${
                  props.current === props.total - 4 ? "active" : ""
                }`}
              >
                <div onClick={() => handlePagination(props.total - 4)}>
                  {props.total - 4}
                </div>
              </li>
              <li
                className={`pick ${
                  props.current === props.total - 3 ? "active" : ""
                }`}
              >
                <div onClick={() => handlePagination(props.total - 3)}>
                  {props.total - 3}
                </div>
              </li>
              <li
                className={`pick ${
                  props.current === props.total - 2 ? "active" : ""
                }`}
              >
                <div onClick={() => handlePagination(props.total - 2)}>
                  {props.total - 2}
                </div>
              </li>
              <li
                className={`pick ${
                  props.current === props.total - 1 ? "active" : ""
                }`}
              >
                <div onClick={() => handlePagination(props.total - 1)}>
                  {props.total - 1}
                </div>
              </li>
              <li
                className={`pick ${
                  props.current === props.total ? "active" : ""
                }`}
              >
                <div onClick={() => handlePagination(props.total)}>
                  {props.total}
                </div>
              </li>
            </>
          ) : (
            <>
              {Array.apply(0, Array(5)).map((arr, i) => (
                <>
                  <li
                    className={` ${props.current === i + 1 ? "active" : ""}`}
                    key={i}
                  >
                    <div
                      className="pick"
                      onClick={() => handlePagination(i + 1)}
                    >
                      {i + 1}
                    </div>
                  </li>
                </>
              ))}
              <li>
                <div className="disabled pick">...</div>
              </li>
              <li>
                <div
                  className="pick"
                  onClick={() => handlePagination(props.total)}
                >
                  {props.total}
                </div>
              </li>
            </>
          )}
        </div>
        <li className={` ${current === total ? "disabled" : ""} prev-one`}>
          <div
            className="pick-main "
            onClick={() => current < total && increaseCurrent()}
          >
            <HiOutlineChevronRight />
          </div>
        </li>
        <li className={` ${current === total ? "disabled" : ""}`}>
          <div className="pick-main" onClick={() => setCurrent(total)}>
            <HiOutlineChevronDoubleRight />
          </div>
        </li>
      </StyleUl>
    </StyleNav>
  );
};
const StyleNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 10px;
  h4 {
    font-size: 12px;
    font-weight: 500;
  }
`;
const StyleUl = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 0;
  .highlight {
    display: flex;
    gap: 0px;
    padding: 0;
  }
  .pick-main {
    cursor: pointer;
  }
  .pick {
    cursor: pointer;
  }
  @media screen and (max-width: 420px) {
    .highlight {
      display: none;
    }
  }
  li {
    font-size: 12px;
    font-weight: 600;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1000px;
    width: 20px;
    height: 20px;

    a {
      color: unset;
      text-decoration: none;
    }
  }
  .active {
    background-color: #2b7fff;
    color: white;
  }
  .disabled {
    opacity: 0.3;
    cursor: not-allowed;
    .pick-main {
      cursor: not-allowed;
    }
  }
`;
export default Pagnigation;
