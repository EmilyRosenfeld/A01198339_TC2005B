/*
Keep track of scores and ball status

Emily Rosenfeld, A01198339
2024-02-21
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameController : MonoBehaviour
{
    public GameObject dot;
    public float force;

    // Start is called before the first frame update
    void Start()
    {
        StartGame();
    }

    // Update is called once per frame
    void Update()
    {
 
    }

    void StartGame()
    {
        dot.GetComponent<Rigidbody2D>().AddForce(Random.onUnitSphere * force);
    }
}