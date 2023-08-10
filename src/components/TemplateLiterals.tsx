type HorizontalPosition = 'left' | 'center' | 'right';
type VerticalPosition = 'top' | 'center' | 'bottom';

type ToastProps = {
	position: `${HorizontalPosition}-${VerticalPosition}`;
};

function TemplateLiterals({ position }: ToastProps) {
	return <div>Toast Notification Position - {position}</div>;
}
export default TemplateLiterals;
