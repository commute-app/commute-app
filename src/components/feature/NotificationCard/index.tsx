import Typography from '../../common/Typography'
import IconButton from '@/components/common/IconButton'

interface NotificationCardProps {
  name: string;
  photoUrl: string;
  type: 'edit' | 'proposal' | 'trip' | 'invite';
  destination?: string;
  onClose?: () => void;
}

export default function NotificationCard(
  {
    name,
    photoUrl,
    type,
    destination,
    onClose,
  }: NotificationCardProps
) {
  const getMessage = () => {
    switch (type) {
      case 'edit':
        return { message: "quiere acceso de edición.", action: "Ver solicitud." };
      case 'proposal':
        return { message: `ha propuesto un viaje hacia `, action: "Iniciar viaje." };
      case 'trip':
        return { message: `ha iniciado un viaje hacia `, action: "Seguir viaje." };
      case 'invite':
        return { message: "quiere conectarse.", action: "Ver solicitud." };
      default:
        return { message: "", action: "" };
    }
  };

  const { message, action } = getMessage();

  return (
    <div className="flex items-center justify-between w-full p-2">
      <div className="flex flex-row items-center gap-3 flex-1 min-w-0">
        <img src={photoUrl} alt={name} className="w-12 h-12 rounded-full flex-shrink-0" />

        {/* Notification Text */}
        <div className="flex flex-wrap gap-1 items-center min-w-0 max-w-fit">
          <Typography variant="body1">
            <strong>{name}</strong> {message} {destination && <strong>{destination}.</strong>} <span className='text-primary-500 cursor-pointer flex-shrink-0 inline'><strong>{action}</strong></span>
          </Typography>
        </div>
      </div>

      <IconButton icon={'cross'} size={'small'} variant={'ghost'} onClick={onClose} />
    </div>
  );
}
