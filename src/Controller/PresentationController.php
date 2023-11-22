<?php

namespace App\Controller;

use App\Entity\Presentation;
use App\Repository\PresentationRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Doctrine\ORM\EntityManagerInterface;

#[Route('/api/presentation')]
class PresentationController extends AbstractController
{
    #[Route('/project/{projectId}', name: 'api_presentation_index', methods: ['GET'])]
    public function index(int $projectId, PresentationRepository $presRepository, SerializerInterface $serializer): JsonResponse {
        $presentations = $presRepository->findBy(['project' => $projectId]);
        $data = $serializer->serialize($presentations, 'json');

        return new JsonResponse($data, Response::HTTP_OK, [], true);
    }

    #[Route('/{id}', name: 'api_presentation_show', methods: ['GET'])]
    public function show(Presentation $presentation, SerializerInterface $serializer): JsonResponse {
        $data = $serializer->serialize($presentation, 'json');

        return new JsonResponse($data, Response::HTTP_OK, [], true);
    }

    // #[Route('/new/{projectId}', name: 'api_presentation_new', methods: ['POST'])]
    // public function new(Request $request, EntityManagerInterface $entityManager, SerializerInterface $serializer, int $projectId): JsonResponse {
    //     $presentationData = json_decode($request->getContent(), true);



    //     $entityManager->persist($presentation);
    //     $entityManager->flush();

    //     return new JsonResponse($serializer->serialize($presentation, 'json'), Response::HTTP_CREATED, [], true);
    // }

    // #[Route('/edit/{id}', name: 'api_presentation_edit', methods: ['PUT'])]
    // public function edit(Request $request, SerializerInterface $serializer, Presentation $presentation, EntityManagerInterface $entityManager): JsonResponse {
    //     $presentationData = json_decode($request->getContent(), true);



    //     $entityManager->flush();

    //     return new JsonResponse($serializer->serialize($presentation, 'json'), Response::HTTP_OK, [], true);
    // }

    // #[Route('/delete/{id}', name: 'api_presentation_delete', methods: ['DELETE'])]
    // public function delete(Presentation $presentation, EntityManagerInterface $entityManager): JsonResponse {
    //     $entityManager->remove($presentation);
    //     $entityManager->flush();

    //     return new JsonResponse(null, Response::HTTP_NO_CONTENT);
    // }
}
