<?php
namespace App\Controller;

use App\Repository\PresentationRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Asset\Packages;

#[Route('/api/presentation')]
class PresentationController extends AbstractController
{
    #[Route('/project/{projectId}', name: 'api_presentation_index', methods: ['GET'])]
    public function index(int $projectId, PresentationRepository $presRepository, Packages $assetsManager): Response {
        $presentations = $presRepository->findBy(['project' => $projectId]);

        $data = array_map(function ($presentation) use ($assetsManager) {
            return [
                'id' => $presentation->getId(),
                'fonction' => $presentation->getFonction(),
                'description' => $presentation->getDescription(),
                'link' => $presentation->getLink(),
            ];
        }, $presentations);

        return $this->json($data);
    }

    #[Route('/{id}', name: 'api_presentation_show', methods: ['GET'])]
    public function show(int $id, PresentationRepository $presRepository, Packages $assetsManager): Response {
        $presentation = $presRepository->find($id);

        if (!$presentation) {
            return $this->json(['message' => 'Presentation not found'], Response::HTTP_NOT_FOUND);
        }

        $data = [
            'id' => $presentation->getId(),
            'fonction' => $presentation->getFonction(),
            'description' => $presentation->getDescription(),
            'link' => $presentation->getLink(),
        ];

        return $this->json($data);
    }
}
