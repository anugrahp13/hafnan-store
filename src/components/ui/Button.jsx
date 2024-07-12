import { PropTypes } from 'prop-types';

export const Button = ({onClick, style, children,}) => {
  return (
    <button onClick={onClick} className={`px-2 py-1 border border-green-600 rounded-lg text-[12px] font-semibold ${style}`}>{children}</button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
  style: PropTypes.string
}
