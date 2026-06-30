import './mobile.css';
import { useIsMobile } from '../../utils/useIsMobile';

export function Mobile() {
    const isMobile = useIsMobile();

    return (
        <>
            {isMobile &&
                <div className="mobile">
                    <div>
                        <p>Mais t'es pas censé ouvrir mon site depuis un portable</p>
                        <p>J'ai tout développé depuis un ordinateur, je teste la vue depuis mon ordinateur, déjà que c'est assez difficile de faire un site un peu responsive, je vais pas en plus préparer ue version mobile</p>
                        <p>Et puis c'est un projet personnel, je vais peut-être le mettre en lien pour certaines candidatures si ça m'amuse, mais je ne vais pas gagner une augmentation à prévoir une version pour tous les modèles d'iPhone</p>
                        <p>Eh oui, c'est dur de lire ce texte, ça ressort bof sur du Jean-Pierre Polnareff, mais c'est pas mon problème, c'est toi qui as choisi de continuer de me lire alors que je t'ai dit 15 fois que c'était pas fait pour être visité depuis un portable</p>
                    </div>
                </div>
            }
        </>
    );
}
